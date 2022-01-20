function Navbar() {
	return (
		<div className="flex justify-center drop-shadow-xl">
			<nav className="flex justify-between grow mt-3 max-w-screen-lg">
				<div>
					<div className="bg-sky-500 h-8 w-8 rounded-full m-1"></div>
				</div>
				<div className="text-2xl oblique">Friend Book</div>
				<div className="">
					<ul className="flex justify-center items-center gap-6 divide-x">
						<li className="hover:bg-gray-50 rounded-xl p-2">About</li>
						<div className="border-l pl-4">
							<li className="bg-sky-400 text-white rounded-2xl shadow-lg shadow-sky-300 hover:bg-gray-50 hover:rounded-xl hover:shadow-none hover:text-black p-2">
								Contact
							</li>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
