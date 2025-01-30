// Imports the page footer to all pages with this scripted
const pageFooter = document.getElementsByTagName('footer')[0];

pageFooter.innerHTML += `
    <div class="section-container">
        <div class="footer-container">

            <div class="footer-col about-company">
                <h3>Who are we?</h3>
                <p>We are the company that provides a blog website filled with all topics that visitors are interested in. This has always been the focus of CKINTS Blogs</p>
            </div>

            <div class="footer-col pages">
                <h3>Pages</h3>
                
                <ul class="footer-pages">
                    <li><i class="fa-solid fa-chevron-right"></i><a href="index.html">Home</a></li>
                    <li><i class="fa-solid fa-chevron-right"></i><a href="blogs.html">Discover</a></li>
                    <li><i class="fa-solid fa-chevron-right"></i><a href="contact.html">Contact</a></li>
                </ul>
            </div>

            <div class="footer-col contact">
                <h3>Contact Us</h3>

                <div class="contact-details">
                    <p><i class="fa-solid fa-location-dot"></i>123 Westford, Greater Rockford, VA</p>
                    <p><i class="fa-solid fa-envelope"></i>CKINTS_Official@email.com</p>
                    <p><i class="fa-solid fa-phone"></i>+1 123 456 7890</p>
                </div>
            </div>

        </div>
    </div>
`