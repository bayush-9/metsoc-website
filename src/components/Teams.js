import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import teams from "../assets/teams.png";
import Card from "./Card";

const Teams = () => {
	const team = [
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
		{
			imgUrl: "/assets/photo.jpeg",
			name: "Mandeep Patwa",
			designation: "Tech Team Member",
			linkedinLink: "https://www.linkedin.com/in/mandeep-patwa-21267b222/",
			instagramLink: "https://www.instagram.com/patwamandeep98/saved/",
			facebookLink: "https://www.facebook.com/profile.php?id=100073549391295",
			emailId: "mandeep.patwa.met21@itbhu.ac.in",
		},
	];
	return (
		<>
			<Navbar />
			<section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl text-white">
				<div className="container p-6 mx-auto space-y-8">
					<div className="w-[90%] h-full m-auto grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
						{/* First card */}
						<article className="flex flex-col rounded-xl">
							<div className="flex flex-col flex-1 p-0 text-center">
								<p className="m-auto text-[50px] sm:text-[75px] font-bold">
									Meet
									<br />
									Our Team
								</p>
							</div>
						</article>
						<article className="flex flex-col rounded-xl">
							<div className="flex flex-col flex-1 p-0 text-center ">
								<p className="m-auto text-[50px] sm:text-[75px] font-bold">
									<img src={teams} className="m-auto" alt="robot" />
								</p>
							</div>
						</article>
					</div>
				</div>
			</section>
			<div className="flex flex-wrap gap-5 my-5 justify-center">
				{team.map((member, i) => {
					return (
						<Card
							className="lg:w-1/5 sm:w-full md:w-1/2"
							key={i}
							imgUrl={member.imgUrl}
							name={member.name}
							designation={member.designation}
							linkedinLink={member.linkedinLink}
							instagramLink={member.instagramLink}
							facebookLink={member.facebookLink}
							emailId={member.emailId}
						/>
					);
				})}
			</div>
			<Footer />
		</>
	);
};

export default Teams;
