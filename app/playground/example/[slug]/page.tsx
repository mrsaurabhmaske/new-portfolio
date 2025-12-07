import Link from "next/link";

export default async function ExamplePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl text-center">
                This example is currently under construction. Check back soon for the live demo!
            </p>
            <Link href="/playground" className="px-6 py-3 rounded-full border border-blue-500/50 hover:bg-blue-500/10 transition-colors">
                Back to Playground
            </Link>
        </div>
    );
}
