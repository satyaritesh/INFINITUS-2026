import React from 'react';
import Image from 'next/image';
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';

interface PopupButton {
    label: string;
    href?: string;
}

interface CategoryPopupProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    buttons: PopupButton[];
    title?: string;
}

const CategoryPopup: React.FC<CategoryPopupProps> = ({ isOpen, onClose, imageSrc, buttons, title }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#030014] shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                        <RxCross2 size={24} />
                    </button>

                    <div className="flex flex-col-reverse lg:flex-row h-full">
                        {/* Left Side - Buttons & Content */}
                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-indigo-900/20 via-[#030014] to-purple-900/20 relative overflow-hidden">
                            {/* Background Effects */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                                <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen" />
                                <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen" />
                            </div>

                            <div className="relative z-10 w-full max-w-md mx-auto">
                                {title && (
                                    <h2 className="text-3xl md:text-4xl font-bold font-red-rose text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-200 mb-8 text-center lg:text-left">
                                        {title}
                                    </h2>
                                )}

                                <div className="flex flex-col gap-4">
                                    {buttons.map((btn, index) => (
                                        <a
                                            key={index}
                                            href={btn.href || "#"}
                                            className="group relative w-full"
                                            target="_blank"
                                        >
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-60 blur group-hover:opacity-100 transition duration-200" />
                                            <button className="relative w-full px-6 py-4 bg-black rounded-lg leading-none flex items-center justify-between transition duration-200 group-hover:bg-black/80">
                                                <span className="font-red-rose text-lg font-semibold text-gray-100 group-hover:text-white transition-colors">
                                                    {btn.label}
                                                </span>
                                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[600px] bg-black/50">
                            <div className="absolute inset-0">
                                <Image
                                    src={imageSrc}
                                    alt={title || "Event Image"}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent lg:bg-gradient-to-l opacity-80" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CategoryPopup;
