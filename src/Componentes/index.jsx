import '../css/styleIndex.css';
import img from '../img/pexels-pixabay-164938.jpg';
import img1 from '../img/pexels-brett-sayles-4167169.jpg';
import img2 from '../img/pexels-guillaume-meurice-2460434.jpg';
import img3 from '../img/pexels-cowomen-2041627.jpg';
import img4 from '../img/pexels-fox-1595391.jpg';
import img5 from '../img/pexels-tima-miroshnichenko-5685821.jpg';
import img6 from '../img/pexels-andrea-piacquadio-3760093.jpg';

function Main() {
    return(
        <main>
            <div className='divImg' id='divImg'>
                <div className='divImgs first' id='first'>
                    <a href='https://www.google.com' className='update'>
                        <img src={img} alt='primera imagen del div main' className='img-im'></img>
                        <div className='divText pri'>
                            <p>Update Live and Push for free</p><br></br>
                            <p>Download Live 11.3.10 ›</p>
                        </div>
                    </a>
                </div>
                <div className='divImgs second'>
                <a href='https://www.google.com' className='update'>
                        <img src={img1} alt='primera imagen del div main' className='img-im'></img>
                        <div className='divText seg'>
                            <p>Focus and feel</p>
                            <p>Meet the new Push ›</p>
                        </div>
                    </a>
                </div>
                <div className='divImgs three'>
                <a href='https://www.google.com' className='update'>
                        <img src={img2} alt='primera imagen del div main' className='img-im'></img>
                        <div className='divText ter'>
                            <p>See what's new in Note</p>
                            <p>Check out the latest features ›</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="divPanels">
                <div className="divPanel panel1">
                    <div className="panelCabeza">
                        <h1>The lastest from Ableton</h1>
                        <ul>
                            <li><a href='https://www.google.com'>All posts</a></li>
                            <li><a href='https://www.google.com'>Artists</a></li>
                            <li><a href='https://www.google.com'>News</a></li>
                            <li><a href='https://www.google.com'>Downloads</a></li>
                            <li><a href='https://www.google.com'>Tutorials</a></li>
                            <li><a href='https://www.google.com'>Videos</a></li>
                            <li><a href='https://www.google.com'>Loop</a></li>
                        </ul>
                    </div>
                    <div className="panelesImgInfo">
                        <a href='https://www.google.com'><img src={img4} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img4} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img4} alt="img" /></a>
                        <div className="textoPaneles">
                            <a href='https://www.google.com' className='span1'><span>Artist</span></a>
                            <p><a href='https://www.google.com'>Together, Apart: Remote Jamming with Speedy J</a></p>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com' className='span2'><span>News</span></a>
                            <a href='https://www.google.com'><p>Get Hands-on with Push 3 at an Event Near You</p></a>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com' className='span3'><span>Loop</span></a>
                            <a href='https://www.google.com'><p>Loop Session: Discover machìna’s Approach to Performing</p></a>
                        </div>
                    </div>
                </div>
                <div className="divPanel panel2">
                    <div className="panelCabeza">
                        <h1>Expand Live with Packs</h1>
                        <ul>
                            <li><a href='https://www.google.com'>Discover more ›</a></li>
                        </ul>
                    </div>
                    <div className="panelesImgInfo">
                        <a href='https://www.google.com'><img src={img5} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img5} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img5} alt="img" /></a>
                        <div className="textoPaneles">
                            <p><a href='https://www.google.com'>Expressive Choir by Spitfire Audio ›</a></p>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com'><p>Building Max Devices by Ableton ›</p></a>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com'><p>SPAT Bundle by Music Unit ›</p></a>
                        </div>
                    </div>
                </div>
                <div className="divPanel panel3">
                    <div className="panelCabeza">
                        <h1>Develop your music-making</h1>
                    </div>
                    <div className="panelesImgInfo">
                        <a href='https://www.google.com'><img src={img3} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img3} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img3} alt="img" /></a>
                        <div className="textoPaneles">
                            <p><a href='https://www.google.com'>Learn the foundations of music ›</a></p>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com'><p>Get started with Live ›</p></a>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com'><p>Go further with Live and Push tutorials ›</p></a>
                        </div>
                    </div>
                </div>
                <div className="divPanel panel4">
                    <div className="panelCabeza">
                        <h1>One Thing videos: monthly creative tips</h1>
                        <ul>
                            <li><a href='https://www.google.com'>Discover more ›</a></li>
                        </ul>
                    </div>
                    <div className="panelesImgInfo">
                        <a href='https://www.google.com'><img src={img6} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img6} alt="img" /></a>
                        <a href='https://www.google.com'><img src={img6} alt="img" /></a>
                        <div className="textoPaneles">
                            <p><a href='https://www.google.com'>Alternating Rhythms ›</a></p>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com'><p>Searching for rhythmic sounds ›</p></a>
                        </div>
                        <div className="textoPaneles">
                            <a href='https://www.google.com'><p>Expression with foley ›</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more">
                <ul>
                    <li><a href='https://www.google.com'>More:</a></li>
                    <li><a href='https://www.google.com'>All posts</a></li>
                    <li><a href='https://www.google.com'>Artists</a></li>
                    <li><a href='https://www.google.com'>News</a></li>
                    <li><a href='https://www.google.com'>Downloads</a></li>
                    <li><a href='https://www.google.com'>Tutorials</a></li>
                    <li><a href='https://www.google.com'>Videos</a></li>
                    <li><a href='https://www.google.com'>Loop</a></li>
                    <li><a href='https://www.google.com'>One Thing</a></li>
                </ul>
            </div>
        </main>
    );
}

export default Main;