
function scrollToSection(sectionNumber){
    var section = document.getElementById('section' + sectionNumber);
    
    var sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    var offset = sectionPosition - 110;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}
