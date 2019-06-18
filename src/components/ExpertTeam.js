import React from 'react';

class ExpertTeam extends React.Component {
    state = {
        team: [
            {
                id: 0,
                name: 'Jarad Johnson',
                title: 'President',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-jarad.jpg'
            },
            {
                id: 1,
                name: 'Lucy Howell',
                title: 'Director of Client Strategy',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-lucy-2.jpg'
            },
            {
                id: 2,
                name: 'Spencer Harris',
                title: 'Director of Operations',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-spencer.jpg'
            },
            {
                id: 3,
                name: 'Chelsea Begley',
                title: 'Account Manger',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-chelsea.jpg'
            },
            {
                id: 4,
                name: 'Jessica Spencer',
                title: 'Director of Design',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-jess.jpg'
            },
            {
                id: 5,
                name: 'Molly Riddle-Nunn',
                title: 'Director of Content Strategy',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-molly.jpg'
            },
            {
                id: 6,
                name: 'Maranda Provance',
                title: 'Director of Engineering',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-maranda.jpg'
            },
            {
                id: 7,
                name: 'Aimee Hendrycks',
                title: 'Senior Engineer',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-aimee.jpg'
            },
            {
                id: 8,
                name: 'Jessica Gottstein',
                title: 'Designer',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-jt.jpg'
            },
            {
                id: 9,
                name: 'Becca Godsey',
                title: 'Marketing Analyst',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-becca.jpg'
            },
            {
                id: 10,
                name: 'Levi Zitting',
                title: 'Engineer',
                image: 'https://www.mostlyserious.io/uploads/team/_tile/digital-solutions-levi.jpg'
            },
            {
                id: 11,
                name: 'Joe Camden',
                title: 'Video and Motion Producer',
                image: 'https://www.mostlyserious.io/uploads/blog/_tile/MOS_Joe-Camden-Who-We-Are.jpg'
            }
        ]
    };
    render() {
        let state = this.state;
        return(
            <section>
                <div className="expert-content">
                    <h2>Our Expert Team</h2><br/>
                    <p>
                        The Mostly Serious team is the product
                        of our commitment to finding those who
                        we affectionately call <em>unicorn people</em>-the
                        rare folks who wield an expert knowledge of their own
                        domain and live by our core values of accountability,
                        integrity, community, devotion, collaboration, and grit.
                        And sure, maybe they have other random talents, like a
                        willingness to literally run around the office delivering
                        high five for every big victory. Overall, though, it's our
                        collective dedication to doing the right thing in the best
                        way that makes us a creative force ot be reckoned with.
                    </p>
                </div>
                <div className="image-container">
                    {
                        state.team.map( person => (
                            <div key={person.id} className="box">
                                <div className="img-wrapper">
                                    <img className="random-img" src={person.image} alt="head shot of team member"/>
                                </div>
                                <div className="img-content">
                                    <h2>{person.name}</h2>
                                    <p>{person.title}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="box">
                        <div className="img-wrapper">
                            <div className="img-content">
                                <h2>Interested in joining our team?</h2>
                                <p>
                                    We're always looking for another unicorn tha loves to create great
                                    products for our clients and isn't afraid to ask "Why?". If this
                                    is you, we'd love to talk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default ExpertTeam;