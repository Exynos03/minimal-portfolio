"use client";
import { useEffect, useState } from "react";

export default function CustomCursor({ isDesktop }: { isDesktop: boolean }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Detect touch capability more reliably
        const isTouchDevice = () => {
            return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0));
        }

        if (!isDesktop || isTouchDevice()) return;

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("hover:cursor-pointer")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <div
            className={`fixed pointer-events-none z-50 transition-transform duration-100 ease-out border border-primary`}
            style={{
                left: position.x,
                top: position.y,
                width: isHovering ? "40px" : "24px",
                height: isHovering ? "40px" : "32px",
                borderRadius: "0 50% 50% 50%",
                transform: `translate(-50%, -50%) rotate(-45deg)`, // Rotated to point down-ish/diagonal
                backgroundColor: "rgba(251, 191, 36, 0.8)", // Honey color, more opaque
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), inset -2px -2px 4px rgba(0,0,0,0.1), inset 2px 2px 4px rgba(255,255,255,0.4)", // Depth and shine
                border: "none",
                transition: "width 0.2s, height 0.2s, transform 0.1s", // Smooth transition
            }}
        />
    );
}
