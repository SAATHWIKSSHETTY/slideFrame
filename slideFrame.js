slideFrame = (e) => {

    // customizable values
    const SFthreshold = 0;

    // main elements
    const SFmain = document.createElement('div');
    const SFlinks = (document.body.dataset.slideframe) ? document.querySelectorAll('a:not([data-slideframe="false"])') : document.querySelectorAll('a[data-slideframe="true"]');

    // create HTML structure
    SFmain.classList.add('slideframe');
    SFmain.innerHTML = '\
    <div class="slideframe-generalclose"></div> \
    <div class="slideframe-container">\
        <div class="slideframe-container-titlebar">\
            <button class="slideframe-container-titlebar-back slideframe-btn">&larr;</button> \
            <strong class="slideframe-container-titlebar-title">Title</strong> \
            <a href="#" target="_blank" class="slideframe-container-titlebar-external slideframe-btn">&nearr;</a> \
        </div> \
        <iframe class="slideframe-container-frame" src=""></iframe> \
    </div>\
    ';
    document.body.append(SFmain);

    // define elements
    const SFtitle = document.querySelector('.slideframe-container-titlebar-title');
    const SFframe = document.querySelector('.slideframe-container-frame');
    const SFexternal = document.querySelector('.slideframe-container-titlebar-external');
    const SFback = document.querySelector('.slideframe-container-titlebar-back');
    const SFclose = document.querySelector('.slideframe-generalclose');

    // link handler
    if(window.innerWidth > SFthreshold){
            
        SFlinks.forEach((link) => {
            if(link.getAttribute('href') !== null) {
                if ((link.hostname !== window.location.hostname) && (link.getAttribute('href').indexOf('mailto:') < 0)  && (link.getAttribute('href').indexOf('tel:') < 0)) {

                    link.addEventListener('click', (e) => {

                        if (!e.metaKey && !e.ctrlKey) {

                            e.preventDefault();

                            SFmain.classList.add('slideframe--visible');
                            document.body.classList.add('slideframe-body--noscroll', 'slideframe-body--loading');

                            let href = link.getAttribute('href');

                            SFframe.setAttribute('src', href);
                            SFframe.setAttribute('title', (link.hasAttribute('title')) ? link.getAttribute('title') : link.innerText);
                            SFtitle.innerText = (link.hasAttribute('title')) ? link.getAttribute('title') : link.innerText;
                            SFexternal.setAttribute('href', link.getAttribute('href'));

                        }
                    });
                }
            }
        });

    }

    // back btn
    SFback.addEventListener('click', (e) => {
        SFmain.classList.remove('slideframe--visible');
        document.body.classList.remove('slideframe-body--noscroll', 'slideframe-body--loading');
        setTimeout((e) => {
            SFframe.setAttribute('src', '');
        }, 200);
    });

    // general close
    SFclose.addEventListener('click', (e) => {
        SFmain.classList.remove('slideframe--visible');
        document.body.classList.remove('slideframe-body--noscroll', 'slideframe-body--loading');
        setTimeout((e) => {
            SFframe.setAttribute('src', '');
        }, 200);
    });

    // esc key
    document.addEventListener('keydown', (e) => {        
        if (e.key === 'Escape') {
            SFmain.classList.remove('slideframe--visible');
            document.body.classList.remove('slideframe-body--noscroll', 'slideframe-body--loading');
            setTimeout((e) => {
                SFframe.setAttribute('src', '');
            }, 200);
        }
    });


    // after loaded
    SFframe.addEventListener('load', (e) => {
        document.body.classList.remove('slideframe-body--loading');
    });
}

slideFrame();