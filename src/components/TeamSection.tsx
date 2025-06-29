'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { Button } from '@/ui/button';

const teamMembers = [
	{
		name: 'Manvith Kumar',
		role: 'Frontend-Dev',
		bio: 'Specializes in natural language processing and model optimization. Passionate about making AI accessible.',
		avatar: '/assets/manchan.jpeg',
		github: 'https://github.com/manvith12',
		linkedin: 'https://linkedin.com/in/manvith-sanisetty',
		email: 'sanisettykumar24bcs0217@iiitkottayam.ac.in',
	},
	{
		name: 'Shaun Sebastian',
		role: 'Project-lead',
		bio: 'Expert in modern web technologies and system architecture. Loves building scalable applications.',
		avatar: '/assets/shaun.jpeg',
		github: 'https://github.com/shaun-sebastian', // Replace with actual link
		linkedin: 'https://linkedin.com/in/shaun-sebastian', // Replace with actual link
		email: 'shaun@iiitk.ac.in',
	},
	{
		name: 'Aishkk Roy',
		role: 'ECE Engineer',
		bio: 'Infrastructure specialist ensuring reliable deployment and monitoring of campus AI systems.',
		avatar: '/assets/aishikk.jpg',
		github: 'https://github.com/aishkk-roy', // Replace with actual link
		linkedin: 'https://linkedin.com/in/aishkk-roy', // Replace with actual link
		email: 'rahul@iiitk.ac.in',
	},
	{
		name: 'Sneha Patel',
		role: 'UX/UI Designer',
		bio: 'Designs intuitive interfaces that make complex AI interactions simple and enjoyable.',
		avatar: '/assets/sneha.jpg',
		github: 'https://github.com/sneha-patel', // Replace with actual link
		linkedin: 'https://linkedin.com/in/sneha-patel', // Replace with actual link
		email: 'sneha@iiitk.ac.in',
	},
];

export function TeamSection() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="team"
			ref={sectionRef}
			className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-vydhya-tertiary to-vydhya-primary"
		>
			<div className="max-w-7xl mx-auto">
				<div
					className={`text-center mb-16 transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vydhya-purple to-vydhya-accent mb-6">
						Meet Our Team
					</h2>
					<p className="text-xl text-vydhya-text max-w-3xl mx-auto leading-relaxed">
						The brilliant minds behind Vydhya AI - a passionate team of students and researchers
						dedicated to advancing AI technology at IIITK.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, index) => (
						<div
							key={member.name}
							className={`transition-all duration-1000 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							<Card className="h-full bg-gradient-to-br from-vydhya-secondary/50 to-vydhya-primary/50 border-vydhya-purple/30 hover:border-vydhya-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-vydhya-purple/20 group">
								<CardHeader className="text-center">
									<div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-vydhya-accent to-vydhya-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
										<img
											src={member.avatar}
											alt={`${member.name}'s avatar`}
											className="w-full h-full object-cover rounded-full"
										/>
									</div>
									<CardTitle className="text-xl font-bold text-vydhya-text group-hover:text-vydhya-accent transition-colors duration-300">
										{member.name}
									</CardTitle>
									<CardDescription className="text-vydhya-purple font-semibold">
										{member.role}
									</CardDescription>
								</CardHeader>
								<CardContent className="text-center">
									<p className="text-vydhya-text/80 text-sm leading-relaxed mb-6">
										{member.bio}
									</p>

									<div className="flex justify-center space-x-3">
										<Button
											variant="ghost"
											size="sm"
											className="p-2 hover:bg-vydhya-accent/20 hover:text-vydhya-accent transition-colors duration-300"
											asChild
										>
											<a
												href={member.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github size={18} />
											</a>
										</Button>
										<Button
											variant="ghost"
											size="sm"
											className="p-2 hover:bg-vydhya-accent/20 hover:text-vydhya-accent transition-colors duration-300"
											asChild
										>
											<a
												href={member.linkedin}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Linkedin size={18} />
											</a>
										</Button>
										<Button
											variant="ghost"
											size="sm"
											className="p-2 hover:bg-vydhya-accent/20 hover:text-vydhya-accent transition-colors duration-300"
											asChild
										>
											<a href={`mailto:${member.email}`}>
												<Mail size={18} />
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					))}
				</div>

				{/* Call to action */}
				<div
					className={`mt-16 text-center transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
					style={{ transitionDelay: '800ms' }}
				>
					<div className="bg-gradient-to-r from-vydhya-purple/20 to-vydhya-accent/20 rounded-2xl p-8 border border-vydhya-accent/20 backdrop-blur-sm">
						<h3 className="text-2xl font-bold text-vydhya-accent mb-4">
							Join Our Mission
						</h3>
						<p className="text-vydhya-text leading-relaxed max-w-3xl mx-auto mb-6">
							Interested in contributing to Vydhya AI? We're always looking for passionate
							students and researchers to join our team and help shape the future of campus AI
							technology.
						</p>
						<Button className="relative bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-vydhya-accent/25 border border-gray-300/10 hover:border-gray-200/20 shadow-inner group overflow-hidden">
							<div className="absolute inset-0 border border-white/10 rounded-full"></div>
							<span className="relative z-10">Get In Touch</span>
							<div className="absolute inset-0 bg-gradient-to-r from-vydhya-accent/20 to-vydhya-purple/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
