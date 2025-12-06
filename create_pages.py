#!/usr/bin/env python3
"""
Script to create separate HTML pages from index.html
"""

import re

# Read the main index.html file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract header (everything before first section)
header_match = re.search(r'(.*?)(<!-- Hero Section|<!-- Services Section)', content, re.DOTALL)
header = header_match.group(1) if header_match else ''

# Extract footer
footer_match = re.search(r'(<!-- Footer -->.*?</footer>.*?</body>.*?</html>)', content, re.DOTALL)
footer = footer_match.group(1) if footer_match else ''

# Navigation template with updated links
nav_template = '''    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="index.html" style="text-decoration: none; color: inherit;">
                    <span class="logo-text">DRIVE<span class="accent">-WELL</span></span>
                    <span class="logo-subtitle">ACADEMY</span>
                </a>
            </div>
            <div class="nav-menu" id="navMenu">
                <a href="index.html" class="nav-link magnetic-element">Home</a>
                <a href="services.html" class="nav-link magnetic-element">Services</a>
                <a href="about.html" class="nav-link magnetic-element">About</a>
                <a href="gallery.html" class="nav-link magnetic-element">Gallery</a>
                <a href="index.html#testimonials" class="nav-link magnetic-element">Reviews</a>
                <a href="faq.html" class="nav-link magnetic-element">FAQ</a>
                <a href="portal.html" class="nav-link magnetic-element">Student Portal</a>
                <a href="contact.html" class="nav-link cta-nav magnetic-element">Book Now</a>
            </div>
            <div class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>'''

# Function to extract section content
def extract_section(section_id, section_name):
    pattern = rf'(<!-- {section_name} Section -->.*?)(?=<!-- |</section>\s*<!-- |$)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        section = match.group(1)
        # Update internal links
        section = section.replace('href="#contact"', 'href="contact.html"')
        section = section.replace('href="#services"', 'href="services.html"')
        section = section.replace('href="#about"', 'href="about.html"')
        section = section.replace('href="#gallery"', 'href="gallery.html"')
        section = section.replace('href="#faq"', 'href="faq.html"')
        section = section.replace('href="#portal"', 'href="portal.html"')
        section = section.replace('href="#education"', 'href="resources.html"')
        return section
    return ''

# Function to create a page
def create_page(filename, title, description, section_content, page_type='section'):
    # Update header with page-specific title
    page_header = header.replace(
        '<title>Drive-Well Academy | Bristol\'s Premier Driving School</title>',
        f'<title>{title} | Drive-Well Academy</title>'
    )
    page_header = page_header.replace(
        'content="Experience luxury driving education in Bristol. Professional instructors, premium vehicles, exceptional pass rates across BS1-BS16."',
        f'content="{description}"'
    )
    page_header = page_header.replace(
        'href="https://www.drive-well-academy.co.uk/"',
        f'href="https://www.drive-well-academy.co.uk/{filename}"'
    )
    
    # Replace navigation in header
    nav_pattern = r'<!-- Navigation -->.*?</nav>'
    page_header = re.sub(nav_pattern, nav_template, page_header, flags=re.DOTALL)
    
    # Update footer links
    page_footer = footer.replace('href="#services"', 'href="services.html"')
    page_footer = page_footer.replace('href="#about"', 'href="about.html"')
    page_footer = page_footer.replace('href="#testimonials"', 'href="index.html#testimonials"')
    page_footer = page_footer.replace('href="#contact"', 'href="contact.html"')
    
    # Combine
    if page_type == 'section':
        page_content = page_header + '\n\n    ' + section_content + '\n\n    ' + page_footer
    else:
        page_content = page_header + '\n\n    ' + section_content + '\n\n    ' + page_footer
    
    # Write file
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(page_content)
    print(f'Created {filename}')

# Extract sections
services_section = extract_section('services', 'Services')
about_section = extract_section('about', 'About')
contact_section = extract_section('contact', 'Contact')
gallery_section = extract_section('gallery', 'Gallery')
faq_section = extract_section('faq', 'FAQ')
education_section = extract_section('education', 'Educational Content')
portal_section = extract_section('portal', 'Student Portal')

# Create pages
create_page('services.html', 'Services', 'Automatic & Manual Driving Lessons in Bristol. Compare packages, pricing, and find the perfect lesson plan for you.', services_section)
create_page('about.html', 'About Us', 'Learn about Drive-Well Academy - Bristol\'s most trusted driving school with 15+ years of experience.', about_section)
create_page('contact.html', 'Contact Us', 'Get in touch with Drive-Well Academy. Book your first lesson, ask questions, or visit our Bristol location.', contact_section)
create_page('gallery.html', 'Gallery', 'View our training vehicles, instructors, student success stories, and test centers in Bristol.', gallery_section)
create_page('faq.html', 'FAQ', 'Frequently asked questions about driving lessons, tests, pricing, and more at Drive-Well Academy.', faq_section)
create_page('resources.html', 'Learning Resources', 'Educational guides, driving tips, theory test preparation, and road safety information.', education_section)
create_page('portal.html', 'Student Portal', 'Access your student portal to view lessons, track progress, and manage your driving course.', portal_section)

print('\nAll pages created successfully!')






