import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedItemProps {
    children: ReactNode;
    delay?: number;
    index: number;
    onMouseEnter?: () => void;
    onClick?: () => void;
}

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }: AnimatedItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.5, once: false });
    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            className="mb-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

interface AnimatedListProps<T> {
    items: T[];
    onItemSelect?: (item: T, index: number) => void;
    className?: string;
    itemClassName?: string;
    renderItem?: (item: T, index: number, isSelected: boolean) => ReactNode;
}

export const AnimatedList = <T,>({
    items,
    onItemSelect,
    className = '',
    itemClassName = '',
    renderItem
}: AnimatedListProps<T>) => {
    const handleItemClick = (item: T, index: number) => {
        if (onItemSelect) {
            onItemSelect(item, index);
        }
    };

    return (
        <motion.div className={`relative ${className}`}>
            {items.map((item, index) => (
                <AnimatedItem
                    key={index}
                    delay={0.1}
                    index={index}
                    onClick={() => handleItemClick(item, index)}
                >
                    {renderItem ? (
                        renderItem(item, index, false)
                    ) : (
                        <div className={`p-4 bg-[#111] rounded-lg ${itemClassName}`}>
                            <p className="text-white m-0">{(item as any).toString()}</p>
                        </div>
                    )}
                </AnimatedItem>
            ))}
        </motion.div>
    );
};
