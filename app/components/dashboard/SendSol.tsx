import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { Scanner } from "@yudiel/react-qr-scanner";

export const SendSol = ({ wallet, connection, handleCloseModal }:any) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [scannerPaused, setScannerPaused] = useState(false);
  const serverUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER || "http://localhost:5000";

  const handleScan = (detectedCodes:any) => {
    if (!detectedCodes || detectedCodes.length === 0) return;
    
    try {
      console.log("Scanned data:", detectedCodes[0]);
      const scannedText = detectedCodes[0].rawValue;
      console.log("Scanned text:", scannedText);
      
      // Pause scanner while processing
      setScannerPaused(true);
      
      // Check if it's a valid Solana address
      if (scannedText && scannedText.length >= 32) {
        setRecipient(scannedText);
        toast.success('Recipient address scanned successfully!');
        setShowScanner(false);
      } else {
        // If not directly a valid address, try parsing as JSON
        try {
          const parsedData = JSON.parse(scannedText);
          console.log("Parsed data:", parsedData);
          
          if (parsedData && typeof parsedData === 'string') {
            setRecipient(parsedData);
            toast.success('Recipient address scanned successfully!');
            setShowScanner(false);
          } else if (parsedData && parsedData.address) {
            setRecipient(parsedData.address);
            toast.success('Recipient address scanned successfully!');
            setShowScanner(false);
          } else {
            toast.error('Invalid QR code format');
          }
        } catch (parseError) {
          console.error("Parse error:", parseError);
          toast.error('Invalid QR code format');
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error('QR scan processing error: ' + errorMessage);
      console.error("Error processing QR code data:", error);
    } finally {
      // Resume scanner after processing
      setScannerPaused(false);
    }
  };

  const handleError = (error:any) => {
    console.error("Scanner error:", error);
    toast.error('Scanner error: ' + error);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!wallet.publicKey || !wallet.sendTransaction) {
      toast.error('Wallet not connected!');
      return;
    }
    
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: new PublicKey(recipient),
          lamports: parseFloat(amount) * LAMPORTS_PER_SOL
        })
      );
      
      const signature = await wallet.sendTransaction(
        transaction,
        connection
      );
      
      const latestBlockhash = await connection.getLatestBlockhash();
      await connection.confirmTransaction({
        signature,
        ...latestBlockhash
      });
      
      // Send transaction details to server
      try {
        const response = await fetch(`${serverUrl}/api/createTransaction`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            walletAddress: recipient,
            token: 'SOL',
            amount: parseFloat(amount) * LAMPORTS_PER_SOL,
            transactionType: 'SEND',
            transactionStatus: 'completed',
            transactionHash: signature
          })
        });

        if (!response.ok) {
          throw new Error('Failed to save transaction details');
        }
      } catch (error) {
        console.error('Error saving transaction details:', error);
      }
      
      toast.success('Transaction sent successfully!');
      
      handleCloseModal();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast.error('Transaction failed: ' + errorMessage);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm text-neutral-400 mb-1">Recipient Address</label>
        <div className="flex">
          <input
            type="text"
            name="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full bg-neutral-700 rounded-l p-2"
          />
          <button
            type="button"
            onClick={() => setShowScanner(!showScanner)}
            className="bg-blue-500 hover:bg-blue-700 px-3 rounded-r"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {showScanner && (
        <div className="my-4">
          <Scanner
            formats={["qr_code"]}
            constraints={{
              facingMode: "environment"
            }}
            onScan={handleScan}
            onError={handleError}
            styles={{ container: { height: "250px", width: "100%" } }}
            components={{
              audio: true,
              onOff: false,
              torch: false,
              finder: false,
            }}
            scanDelay={500}
            paused={scannerPaused}
          />
        </div>
      )}
      
      <div>
        <label className="block text-sm text-neutral-400 mb-1">Amount (SOL)</label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-neutral-700 rounded p-2"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
      >
        Send
      </button>
    </form>
  );
};

export default SendSol;