"use client";
import { useEffect, useState } from "react";

export default function CustomCursor({ isDesktop }: { isDesktop: boolean }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!isDesktop) return;

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
                width: isHovering ? "40px" : "20px",
                height: isHovering ? "40px" : "20px",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: isHovering ? "rgba(239, 68, 68, 0.1)" : "transparent",
            }}
        />
    );
}
