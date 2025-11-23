import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Saurabh Maske</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl">
                Frontend Engineer specializing in React & Next.js.
            </p>

            <div className="flex gap-6">
                <Link href="/projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 hover:border-blue-400 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    View Projects
                </Link>
                <Link href="/contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 hover:border-purple-400 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    Contact Me
                </Link>
            </div>
        </div>
    );
}
