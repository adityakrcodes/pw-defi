"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/compat/router";
import { useWallet } from "@solana/wallet-adapter-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
    const wallet = useWallet()
    const serverUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER || "http://localhost:5000";

    useEffect(() => {
        if (wallet && wallet.publicKey) {
            setWalletAddress(wallet.publicKey.toString());
        } else {
            setWalletAddress("Wallet not Connected");
        }
    }, [wallet]);

	const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");
		setLoading(true);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

		try {
            const response = await fetch(
                `${serverUrl}/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ walletAddress, firstname, lastname, username, email, password }),
                }
            );

			const data = await response.json();

			if (response.ok) {
				console.log("Registration successful:", data);
                toast.success("Registration successful! Redirecting to dashboard...");
                await new Promise(resolve => setTimeout(resolve, 1000));
				window.location.href = "/dashboard";
			} else {
				setError(data.message || "Registration failed");
			}
		} catch (err) {
			setError("Failed to connect to the server");
			console.error("Registration error:", err);
		} finally {
			setLoading(false);
		}
	};

	return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ToastContainer />
            <div
                className="text-5xl mb-5 py-3 text-center font-bold bg-gradient-to-r from-gray-400 to-gray-400/70 bg-clip-text text-transparent"
            >
                Register
            </div>
            <form onSubmit={handleRegistration} className="flex flex-col bg-gray-600/50 gap-2 w-11/12 p-4 rounded-xl shadow-md">
                <div className="bg-gray-500/50 p-2 shadow-md rounded flex flex-col">
                    <label htmlFor="walletAddress" className="font-bold">Wallet Address</label>
                    <input
                        type="text"
                        id="walletAddress"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
                        disabled={true} // it's disabled because we are getting it from the wallet
                    />
                </div>
                <div className="bg-gray-500/50 p-2 shadow-md rounded flex flex-col">
                    <label htmlFor="firstname" className="font-bold">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
                        placeholder="Bablesh"
                    />
                </div>
                <div className="bg-gray-500/50 p-2 shadow-md rounded flex flex-col">
                    <label htmlFor="lastname" className="font-bold">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
                        placeholder="Khalifa"
                    />
                </div>
				<div className="bg-gray-500/50 p-2 shadow-md rounded flex flex-col">
					<label htmlFor="username" className="font-bold">Username</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
						placeholder="bableshkhalifa"
					/>
				</div>
				<div className="bg-gray-500/50 p-2 shadow-md rounded flex flex-col">
					<label htmlFor="email" className="font-bold">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
						placeholder="bkr@defi.com"
					/>
				</div>
				<div className="bg-gray-500/50 p-2 shadow-md rounded flex flex-col">
					<label htmlFor="password" className="font-bold">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
						placeholder="********"
					/>
				</div>
                <div className="bg-gray-500/50 p-2 shadow-md rounded flex flex-col">
					<label htmlFor="password" className="font-bold">Confirm Password</label>
					<input
						type="password"
						id="confirmPassword"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
						placeholder="********"
					/>
				</div>
				<button
					type="submit"
					disabled={loading}
					className="bg-gray-500 w-40 mx-auto text-white font-bold p-2 rounded shadow-md m-4"
				>
					{loading ? "Registering..." : "Register"}
				</button>
			</form>
			{error && <p className="font-bold bg-red-500 rounded-sm p-2 mt-2">{error}!!</p>}
		</div>
	);
};

export default RegistrationPage;
