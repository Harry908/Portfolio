/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 })

    }, [])
    return (
        <div id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>

                    {/* LEFT */}
                    <div ref={project1Ref} className='first-project-wrapper'>
                        <img src='/images/project1.png' alt='Ryde image' />

                        <div className='text-content'>
                            <h2>Project 1</h2>
                            <p className='text-white-50 md:text-xl'>
                                Project 1 description....
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        {/* Project 2 */}
                        <div ref={project2Ref} className='project'>
                            <div className='image-wrapper'>
                                <img src='/images/project2.png' alt='Project 2 image' />
                            </div>
                            <h2>Project 2</h2>
                        </div>

                        {/* Project 3 */}
                        <div ref={project3Ref} className='project'>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project3.png' alt='Project 3 image' />
                            </div>
                            <h2>Project 3</h2>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Showcase