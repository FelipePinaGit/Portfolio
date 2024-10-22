function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    closeNav();
});

const skillIcons = document.querySelectorAll('.skill img');

skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

const allImages = document.querySelectorAll('img');

allImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; 
        image.style.transition = 'transform 0.3s';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

function applyResponsiveStyles() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 600) {
        document.querySelector('header').style.padding = '10px 20px';
        document.querySelector('header').style.fontSize = '16px';
        document.querySelector('.menu-icon').style.fontSize = '24px';

        document.querySelector('.container').style.padding = '10px';
        document.querySelector('.container').style.margin = '10px auto';
        document.querySelector('.container').style.maxWidth = '95%';

        const aboutContent = document.querySelector('.about-content');
        aboutContent.style.flexDirection = 'column';
        aboutContent.style.textAlign = 'center';

        const aboutPhoto = document.querySelector('.about-photo img');
        aboutPhoto.style.width = '150px';
        aboutPhoto.style.height = '150px';
        aboutPhoto.style.margin = '0 auto';

        document.querySelector('.about-text h3').style.fontSize = '18px';

        const skills = document.querySelector('.skills');
        skills.style.flexDirection = 'column';

        document.querySelectorAll('.skill').forEach(skill => {
            skill.style.width = '80px';
            skill.style.margin = '5px 0';
        });

        document.querySelectorAll('.skill img').forEach(img => {
            img.style.width = '50px';
            img.style.height = '50px';
        });

        const projects = document.querySelector('.projects');
        projects.style.flexDirection = 'column';

        document.querySelectorAll('.project').forEach(project => {
            project.style.width = '90%';
            project.style.margin = '10px auto';
        });

        document.querySelectorAll('.project-body').forEach(projectBody => {
            projectBody.style.flexDirection = 'column';
        });

        document.querySelectorAll('.project img').forEach(img => {
            img.style.width = '80px';
            img.style.margin = '10px auto';
        });

        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.style.width = '32px';
            icon.style.height = '32px';
        });

    } else {
        document.querySelector('header').style.padding = '20px 50px';
        document.querySelector('header').style.fontSize = 'inherit';
        document.querySelector('.menu-icon').style.fontSize = '30px';

        document.querySelector('.container').style.padding = '20px 10px';
        document.querySelector('.container').style.margin = '20px auto';
        document.querySelector('.container').style.maxWidth = '1000px';

        const aboutContent = document.querySelector('.about-content');
        aboutContent.style.flexDirection = 'row';
        aboutContent.style.textAlign = 'left';

        const aboutPhoto = document.querySelector('.about-photo img');
        aboutPhoto.style.width = '200px';
        aboutPhoto.style.height = '200px';
        aboutPhoto.style.marginRight = '20px';

        document.querySelector('.about-text h3').style.fontSize = '23px';

        const skills = document.querySelector('.skills');
        skills.style.flexDirection = 'row';

        document.querySelectorAll('.skill').forEach(skill => {
            skill.style.width = '150px';
            skill.style.margin = '20px';
        });

        document.querySelectorAll('.skill img').forEach(img => {
            img.style.width = '100px';  
            img.style.height = '100px';
        });

        const projects = document.querySelector('.projects');
        projects.style.flexDirection = 'row';

        document.querySelectorAll('.project').forEach(project => {
            project.style.width = '700px';
            project.style.margin = '20px';
        });

        document.querySelectorAll('.project-body').forEach(projectBody => {
            projectBody.style.flexDirection = 'row';
        });

        document.querySelectorAll('.project img').forEach(img => {
            img.style.width = '20%';
            img.style.marginRight = '20px';
        });

        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.style.width = '24px';
            icon.style.height = '24px';
        });
    }
}

document.addEventListener("DOMContentLoaded", applyResponsiveStyles);
window.addEventListener('resize', applyResponsiveStyles);
