"use client";
import React, { useEffect, useRef } from "react";

export default function HoneycombBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        resize();

        // Check for touch/mobile
        const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        const hexRadius = 30;

        class Bee {
            x: number;
            y: number;
            vx: number;
            vy: number;
            angle: number;
            speed: number;
            state: 'wander' | 'chase';

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.angle = 0;
                this.speed = 2 + Math.random() * 2;
                this.state = 'wander';
            }

            update(mx: number, my: number, w: number, h: number) {
                const dx = mx - this.x;
                const dy = my - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Check if mouse is active (simple check if it's not 0,0 or very far)
                // If dist < 300, start chasing, BUT NOT ON MOBILE
                if (!isMobile && dist < 300 && dist > 10) {
                    this.state = 'chase';
                } else {
                    this.state = 'wander';
                }

                if (this.state === 'chase') {
                    const angleToMouse = Math.atan2(dy, dx);
                    // Swarm behavior: add noise
                    const noise = (Math.random() - 0.5) * 0.5;
                    this.vx += Math.cos(angleToMouse + noise) * 0.5;
                    this.vy += Math.sin(angleToMouse + noise) * 0.5;

                    // Max speed in chase
                    const currentSpeed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
                    const maxSpeed = this.speed * 2.5;
                    if (currentSpeed > maxSpeed) {
                        this.vx = (this.vx / currentSpeed) * maxSpeed;
                        this.vy = (this.vy / currentSpeed) * maxSpeed;
                    }
                } else {
                    // Wander randomly
                    this.vx += (Math.random() - 0.5) * 0.2;
                    this.vy += (Math.random() - 0.5) * 0.2;

                    const currentSpeed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
                    if (currentSpeed > this.speed) {
                        this.vx = (this.vx / currentSpeed) * this.speed;
                        this.vy = (this.vy / currentSpeed) * this.speed;
                    }
                }

                // Drag/Friction
                this.vx *= 0.96;
                this.vy *= 0.96;

                this.x += this.vx;
                this.y += this.vy;

                // Screen wrapping
                if (this.x < -50) this.x = w + 50;
                if (this.x > w + 50) this.x = -50;
                if (this.y < -50) this.y = h + 50;
                if (this.y > h + 50) this.y = -50;

                this.angle = Math.atan2(this.vy, this.vx);
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                // Calculate wing flap (rapid oscillation)
                const time = Date.now() * 0.02;
                const wingY = Math.sin(time) * 4;

                // --- FLUFFY BEE BODY ---

                // 1. Abdomen (Rear) - Rounded and striped
                // Base yellow
                ctx.fillStyle = "#FFD700"; // Gold
                ctx.beginPath();
                ctx.ellipse(-2, 0, 6, 4.5, 0, 0, Math.PI * 2);
                ctx.fill();

                // Stripes (Curved for 3D effect)
                ctx.strokeStyle = "#1a1a1a";
                ctx.lineWidth = 2.5;
                ctx.lineCap = "round";

                ctx.beginPath();
                ctx.moveTo(0, -4);
                ctx.quadraticCurveTo(-1, 0, 0, 4);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(-4, -3);
                ctx.quadraticCurveTo(-5, 0, -4, 3);
                ctx.stroke();

                // 2. Thorax (Middle) - Fuzzy dark
                ctx.fillStyle = "#2a2a2a";
                ctx.beginPath();
                ctx.ellipse(3, 0, 3.5, 3.5, 0, 0, Math.PI * 2);
                ctx.fill();

                // 3. Head (Front)
                ctx.fillStyle = "#1a1a1a";
                ctx.beginPath();
                ctx.ellipse(7, 0, 2.5, 2.5, 0, 0, Math.PI * 2);
                ctx.fill();

                // Eyes
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(8, -1.5, 0.8, 0, Math.PI * 2);
                ctx.arc(8, 1.5, 0.8, 0, Math.PI * 2);
                ctx.fill();

                // --- WINGS ---
                // Translucent white-blue with vein hint, fluttering
                ctx.fillStyle = "rgba(200, 220, 255, 0.5)";
                ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
                ctx.lineWidth = 0.5;

                // Right Wing (Top)
                ctx.beginPath();
                ctx.ellipse(2, -4 - Math.abs(wingY * 0.2), 7, 2.5, -Math.PI / 8 + (wingY * 0.05), 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Left Wing (Bottom)
                ctx.beginPath();
                ctx.ellipse(2, 4 + Math.abs(wingY * 0.2), 7, 2.5, Math.PI / 8 - (wingY * 0.05), 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Legs (Tiny detail)
                ctx.strokeStyle = "#1a1a1a";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(3, 3);
                ctx.lineTo(4, 6);
                ctx.moveTo(3, -3);
                ctx.lineTo(4, -6);
                ctx.stroke();

                ctx.restore();
            }
        }

        const bees: Bee[] = [];
        for (let i = 0; i < 20; i++) {
            bees.push(new Bee(canvas.width, canvas.height));
        }

        const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle_deg = 60 * i;
                const angle_rad = (Math.PI / 180) * angle_deg;
                const px = x + size * Math.cos(angle_rad);
                const py = y + size * Math.sin(angle_rad);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(251, 191, 36, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        const render = () => {
            // Clear entire canvas to handle transparency correctly
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cols = Math.ceil(canvas.width / (hexRadius * 3)) * 2 + 2;
            const rows = Math.ceil(canvas.height / (hexRadius * Math.sqrt(3) / 2)) + 2;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    let x = c * (hexRadius * 1.5);
                    let y = r * (hexRadius * Math.sqrt(3));
                    if (c % 2 !== 0) {
                        y += (hexRadius * Math.sqrt(3)) / 2;
                    }

                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 300;

                    let opacity = 0.05;
                    if (dist < maxDist) {
                        opacity = 0.05 + (1 - dist / maxDist) * 0.3;
                    }

                    drawHexagon(x, y, hexRadius, opacity);

                    // Tiny honey fill if very close
                    if (dist < 80) {
                        ctx.fillStyle = `rgba(251, 191, 36, ${(1 - dist / 80) * 0.15})`;
                        ctx.fill();
                    }
                }
            }

            bees.forEach(bee => {
                bee.update(mouseX, mouseY, canvas.width, canvas.height);
                bee.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1]">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
