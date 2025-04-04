import React from "react";

const Auth = () => {
	return (
		<div
			id="auth"
			className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-4"
		>
			<div className="w-full max-w-md" x-data="{ isLogin: true }">
				<div className="bg-neutral-800 rounded-lg border border-neutral-700/30 p-8">
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold">DeFi Platform</h1>
						<p className="text-neutral-400 mt-2">
							Secure, Decentralized, Efficient
						</p>
					</div>

					<form x-show="isLogin" className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-neutral-300 mb-2">
								Email Address
							</label>
							<input
								type="email"
								required
								className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
								placeholder="Enter your email"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-neutral-300 mb-2">
								Password
							</label>
							<input
								type="password"
								required
								className="w-full px-4 py-3 bg-neutral-700/30 border border-neutral-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-neutral-500"
								placeholder="Enter your password"
							/>
						</div>
						<div className="flex items-center justify-between">
							<label className="flex items-center">
								<input
									type="checkbox"
									className="form-checkbox h-4 w-4 text-blue-500"
								/>
								<span className="ml-2 text-sm text-neutral-400">
									Remember me
								</span>
							</label>
							<a
								href="#"
								className="text-sm text-blue-500 hover:text-blue-400"
							>
								Forgot password?
							</a>
						</div>
						<button
							type="submit"
							className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300"
						>
							Login
						</button>
					</form>

					<div className="mt-8">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-neutral-700/30"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-neutral-800 text-neutral-400">
									Or continue with
								</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-4">
							<button className="flex items-center justify-center px-4 py-3 border border-neutral-700/30 rounded-lg hover:bg-neutral-700/30 transition-colors duration-300">
								<svg
									className="h-5 w-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M12.545,12.151L12.545,12.151c0,1.054,0.947,1.91,2.021,1.91h3.572c1.074,0,2.021-0.856,2.021-1.91v-3.572c0-1.054-0.947-1.91-2.021-1.91h-3.572c-1.074,0-2.021,0.856-2.021,1.91V12.151z M12.545,12.151"></path>
								</svg>
								<span className="ml-2">Google</span>
							</button>
							<button className="flex items-center justify-center px-4 py-3 border border-neutral-700/30 rounded-lg hover:bg-neutral-700/30 transition-colors duration-300">
								<svg
									className="h-5 w-5"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.217,0.682-0.482c0-0.237-0.008-0.865-0.013-1.696c-2.782,0.604-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.029-2.683C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.392,0.1,2.644c0.64,0.699,1.026,1.592,1.026,2.683c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852c0,1.335-0.012,2.415-0.012,2.741c0,0.267,0.18,0.577,0.688,0.479C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"></path>
								</svg>
								<span className="ml-2">GitHub</span>
							</button>
						</div>
					</div>
				</div>

				<div className="mt-6 text-center text-sm text-neutral-400">
					<p x-show="isLogin">
						New to platform?{" "}
						<button className="text-blue-500 hover:text-blue-400">
							Create an account
						</button>
					</p>
					<p x-show="!isLogin">
						Already have an account?{" "}
						<button className="text-blue-500 hover:text-blue-400">
							Login here
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Auth;
