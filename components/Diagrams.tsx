
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, ArrowRight } from 'lucide-react';

// --- STAT CARD (Premium Frosted) ---
export const StatCard: React.FC<{ icon: React.ReactNode, value: string, label: string, sub: string, delay: number }> = ({ icon, value, label, sub, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.6 }}
        className="glass-card p-10 rounded-3xl flex flex-col items-start min-h-[220px] justify-center"
    >
        <div className="mb-6 text-white opacity-90 scale-125 origin-left">
            {icon}
        </div>
        <h4 className="text-5xl md:text-6xl font-light text-white mb-3 tracking-tight">{value}</h4>
        <p className="text-sm font-semibold text-zinc-300 uppercase tracking-widest">{label}</p>
        <p className="text-base text-zinc-400 mt-2">{sub}</p>
    </motion.div>
);

// --- SLIDING SKILLS (Marquee) ---
export const SlidingSkills: React.FC<{ items: string[], direction?: 'left' | 'right', speed?: number }> = ({ items, direction = 'left', speed = 25 }) => {
    // Duplicate items to create seamless loop
    const duplicatedItems = [...items, ...items];

    return (
        <div className="flex overflow-hidden w-full mask-gradient">
            <motion.div 
                className="flex gap-8 flex-shrink-0 pr-8"
                initial={{ x: direction === 'left' ? "0%" : "-50%" }}
                animate={{ x: direction === 'left' ? "-50%" : "0%" }}
                transition={{ duration: speed, ease: "linear", repeat: Infinity }}
            >
                {duplicatedItems.map((item, i) => (
                    <span 
                        key={i} 
                        className="text-2xl font-light text-zinc-200 px-8 py-4 border border-white/10 rounded-2xl bg-white/5 whitespace-nowrap backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-colors cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

// --- TIMELINE ITEM (Minimalist) ---
export const TimelineItem: React.FC<{ 
    date: string, 
    role: string, 
    company: string, 
    description: string, 
    tags: string[],
}> = ({ date, role, company, description, tags }) => (
    <div className="relative pl-10 md:pl-0 group mb-12 last:mb-0">
        <div className="md:flex md:justify-between md:gap-20 items-start">
            {/* Date Column */}
            <div className="hidden md:block w-48 pt-2 text-right text-lg font-medium text-zinc-400 tracking-wide">
                {date}
            </div>

            {/* Content Column */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 pb-16 border-l border-white/10 pl-12 relative"
            >
                {/* Timeline Dot - Metallic look */}
                <div className="absolute -left-[7px] top-2.5 w-3.5 h-3.5 rounded-full bg-zinc-800 border border-zinc-500 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

                <div className="md:hidden text-base text-zinc-400 mb-3">{date}</div>
                
                <h4 className="text-3xl font-medium text-white mb-2">{role}</h4>
                <div className="text-zinc-300 text-lg tracking-widest uppercase mb-6 font-medium">{company}</div>
                <p className="text-zinc-300 text-xl leading-relaxed mb-6 max-w-3xl font-light">{description}</p>
                
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-sm font-medium text-zinc-300 px-4 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>
);

// --- PROJECT CARD (Product Style) ---
export const ProjectCard: React.FC<{ title: string, tech: string, description: string, link: string, featured?: boolean }> = ({ title, tech, description, link, featured }) => (
    <motion.a 
        href={link}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="block h-full group relative rounded-3xl glass-card transition-all duration-500"
    >
        <div className="p-12 h-full flex flex-col justify-between relative z-10">
            <div>
                <div className="flex justify-between items-start mb-10">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white tracking-wide border border-white/10 shadow-sm">
                        {tech}
                    </span>
                    <ArrowUpRight className="text-zinc-400 group-hover:text-white transition-colors" size={28} />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight group-hover:text-white/90 transition-colors leading-tight">
                    {title}
                </h3>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
                 <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
                    {description}
                </p>
                <div className="mt-8 flex items-center gap-3 text-base font-medium text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    View Project <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
            </div>
        </div>
    </motion.a>
);

// --- BLOG CARD ---
export const BlogCard: React.FC<{
    title: string,
    date: string,
    readTime: string,
    excerpt: string,
    tags: string[],
    link?: string
}> = ({ title, date, readTime, excerpt, tags, link = "#" }) => (
    <motion.a
        href={link}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group relative flex flex-col justify-between p-8 rounded-3xl glass-card border border-white/10 hover:bg-white/5 transition-all duration-300"
    >
        <div>
            <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {date}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {readTime}</span>
            </div>
            
            <h3 className="text-2xl font-light text-white mb-4 leading-tight group-hover:text-zinc-200 transition-colors">
                {title}
            </h3>
            
            <p className="text-zinc-400 text-base leading-relaxed mb-6 line-clamp-3">
                {excerpt}
            </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
             <div className="flex gap-2">
                {tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5">
                        {tag}
                    </span>
                ))}
             </div>
             <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
                Read <ArrowRight size={16} />
             </span>
        </div>
    </motion.a>
);

// Old SkillBadge - Keeping for compatibility if needed
export const SkillBadge: React.FC<{ name: string, index: number }> = ({ name, index }) => (
     <span className="px-4 py-2 bg-white/5 rounded-full text-sm">{name}</span>
);
