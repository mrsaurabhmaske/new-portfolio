export interface Project {
    title: string;
    description: string;
    image: string;
    githubLink?: string;
    demoLink?: string;
    features?: string[];
}

export const projects: Project[] = [
    {
        title: "Medishine.com",
        description: "A user-friendly Medicare website that empowers patients to conveniently book appointments with doctors from various medical categories. The platform also provides doctors with a streamlined dashboard.",
        image: "/project_screenshots/medishine.png",
        githubLink: "https://github.com/mrsaurabhmaske/resolute-mountain-5021",
        demoLink: "https://medishine.vercel.app/"
    },
    {
        title: "Travelish.com",
        description: "Your ultimate travel companion for exploring the world. Travellish is an online travel website that offers a wide range of travel-related services to make your travel experience hassle-free, fun and memorable.",
        image: "/project_screenshots/travelish_big.png",
        githubLink: "https://github.com/mrsaurabhmaske/huge-coast-1878",
        demoLink: "https://lively-marigold-c98b3e.netlify.app/",
        features: ["Flight Booking", "Hotel Booking"]
    },
    {
        title: "Paaltoo.com",
        description: "PetCare platform where pet owners discover a world of unparalleled care and support for their beloved furry friends.",
        image: "/project_screenshots/Paaltoo.png",
        githubLink: "https://github.com/CODEwithSANKETj/vivid-roll-405",
        demoLink: "https://vivid-roll-405.vercel.app/"
    },
    {
        title: "Furlinko.com",
        description: "A user-friendly Furniture E-commerce website that provide best products and the customer service with a beautiful UI and user experience.",
        image: "/project_screenshots/furlinko_big.png",
        githubLink: "https://github.com/Hardik8140/gas-scarecrow-3264",
        demoLink: "https://gas-scarecrow-3264.vercel.app/"
    },
    {
        title: "New Projects Coming Soon...",
        description: "Thank you for your Patience...",
        image: "/project_screenshots/workinprogress.gif"
    }
];
