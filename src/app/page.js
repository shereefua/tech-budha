"use client";
import { CirclePlus } from "lucide-react";
import ArticleHeadr from "@/components/ArticleHeadr";

import IframeXpaybck from "@/components/IframeXpaybck";
import VideoBudha from "@/components/VideoBudha";
import IfreameTechBudha from "@/components/IfreameTechBudha";
import XpayBckBanner from "../components/XpayBckBanner";
import XpaybckCmpliyBanner from "../components/XpaybckCmpliyBanner";
import TechbudaPortFolio from "../components/TechbudaPortFolio";
import BuddaButton from "../components/BuddaButton";
import EnquiryFom from "@/components/EnquiryFom";
export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 border border-violet-600 space-y-10">
                <ArticleHeadr />

                <div className="flex flex-col md:flex-row h-auto p-5">
                    {/* First aside - Portfolio & Video */}
                    <aside className="flex flex-col items-center space-y-6 w-full md:w-1/2 p-4">
                        <div>
                            <TechbudaPortFolio /> {/* Portfolio Title & Profile Icon */}
                        </div>

                        <div className="w-full max-w-xl">
                            <VideoBudha /> {/* Tech Buddha Video */}
                        </div>
                    </aside>

                    {/* Centered CirclePlus Icon */}
                    <div className="flex justify-center items-center my-4 md:my-0">
                        <CirclePlus size={80} />
                    </div>

                    {/* Second aside */}
                    <aside className="flex flex-col items-center space-y-6 w-full md:w-1/2 p-4">
                        <div>
                            <XpaybckCmpliyBanner />
                        </div>

                        <div>
                            <XpayBckBanner /> {/* XPayBack Promotional Card */}
                        </div>

                        <div className="w-full max-w-xl">
                            <IframeXpaybck /> {/* XPayBack Website Iframe */}
                        </div>
                    </aside>
                </div>

                <main className="flex flex-col items-center space-y-4 p-4">
                    <div className="flex flex-col items-center w-full">
                        <BuddaButton /> {/* Centered Button */}
                        <IfreameTechBudha /> {/* Centered Iframe */}
                    </div>
                </main>

                <footer>
                    <EnquiryFom />
                </footer>
            </div>
        </>
    );
}
