/* 
    All the functions below are used to:
        1. Make the planetary labels visbile when the cursor is hovering.
        2. Illuminate the planets when the cursor is hovering.
*/


function nemaLabel() {
    document.getElementById('nemaLabel').style.opacity = '1';
    document.getElementById('planet').style.boxShadow = 'inset -1em -1em 3.25em 1.75em black, inset .75em .75em 2em .5em #ff9980, -0.25em -0.25em 1.5em 0.02em #ff9980';
    document.getElementById('planet').style.transition = '0.4s';
}

function hideNemaLabel() {
    document.getElementById('nemaLabel').style.opacity = '0';
    document.getElementById('planet').style.boxShadow = 'inset -1em -1em 3.25em 1.75em black, inset .75em .75em 2em .5em #ff9980, -0.25em -0.25em 1em 0.005em #ff9980';
}


function savannahLabel() {
    document.getElementById('savannahLabel').style.opacity = '1';
    document.getElementById('moon1').style.boxShadow = 'inset -1em -1em 1.5em .04em black, inset .35em .35em 0.75em 0.005em #b3b3ff, -.25em -.25em 0.75em 0.007em #b3b3ff';
    document.getElementById('moon1').style.transition = '0.4s';
}

function hideSavannahLabel() {
    document.getElementById('savannahLabel').style.opacity = '0';
    document.getElementById('moon1').style.boxShadow = 'inset -1em -1em 1.5em .04em black, inset .35em .35em 0.75em 0.005em #b3b3ff, -.25em -.25em 0.5em 0.005em #b3b3ff';
}


function nestleLabel() {
    document.getElementById('nestleLabel').style.opacity = '1';
    document.getElementById('moon2').style.boxShadow = 'inset -.75em -.75em 1em 0.05em black, inset 0.1em 0.1em 1em 0.005em #ff944d, -0.1em -0.1em 0.7em 0.01em #ff944d';
    document.getElementById('moon2').style.transition = '0.4s';
}
function hideNestleLabel() {
    document.getElementById('nestleLabel').style.opacity = '0';
    document.getElementById('moon2').style.boxShadow = 'inset -.75em -.75em 1em 0.05em black, inset 0.1em 0.1em 1em 0.005em #ff944d, -0.1em -0.1em 0.5em 0.005em #ff944d';
}


function levelLabel() {
    document.getElementById('levelLabel').style.opacity = '1';
    document.getElementById('moon3').style.boxShadow = 'inset -0.75em -0.75em 0.5em 0.01em black, inset 0.1em 0.1em 0.75em 0.01em white, -0.05em -0.05em 0.7em 0.01em white';
    document.getElementById('moon3').style.transition = '0.4s';
}
function hideLevelLabel() {
    document.getElementById('levelLabel').style.opacity = '0';
    document.getElementById('moon3').style.boxShadow = 'inset -0.75em -0.75em 0.5em 0.01em black, inset 0.1em 0.1em 0.75em 0.01em white, -0.05em -0.05em 0.4em 0.005em white';
}


function beerLabel() {
    document.getElementById('beerLabel').style.opacity = '1';
    document.getElementById('moon4').style.boxShadow = 'inset -0.5em -0.5em 1em 0.05em black, inset 0.1em 0.1em 0.75em 0.01em white, -0.04em -0.04em 0.75em 0.007em white';
    document.getElementById('moon4').style.transition = '0.4s';
}
function hideBeerLabel() {
    document.getElementById('beerLabel').style.opacity = '0';
    document.getElementById('moon4').style.boxShadow = 'inset -0.5em -0.5em 1em 0.05em black, inset 0.1em 0.1em 0.75em 0.01em white, -0.04em -0.04em 0.4em 0.003em white';
}

function visitLabel() {
    document.getElementById('visitLabel').style.opacity = '1';
    document.getElementById('nestleMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em #ff944d, -0.1em -0.1em 1em 0.08em  #ff944d';
    document.getElementById('nestleMoon').style.transition = '0.4s';
}
function hideVisitLabel() {
    document.getElementById('visitLabel').style.opacity = '0';
    document.getElementById('nestleMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em #ff944d, -0.1em -0.1em 0.75em 0.05em  #ff944d';
}

function visitNemaLabel() {
    document.getElementById('visitLabel').style.opacity = '1';
    document.getElementById('nemaMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em #ff9980, -0.1em -0.1em 1em 0.08em  #ff9980';
    document.getElementById('nemaMoon').style.transition = '0.4s';
}

function hideVisitNemaLabel() {
    document.getElementById('visitLabel').style.opacity = '0';
    document.getElementById('nemaMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em #ff9980, -0.1em -0.1em 0.75em 0.05em  #ff9980';
}

function visitBeerLabel() {
    document.getElementById('visitLabel').style.opacity = '1';
    document.getElementById('beerMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em white, -0.1em -0.1em 1em 0.08em  white';
    document.getElementById('beerMoon').style.transition = '0.4s';
}

function hideVisitBeerLabel() {
    document.getElementById('visitLabel').style.opacity = '0';
    document.getElementById('beerMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em white, -0.1em -0.1em 0.75em 0.05em  white';
}

function visitSavannahLabel() {
    document.getElementById('visitLabel').style.opacity = '1';
    document.getElementById('savannahMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em #b3b3ff, -0.1em -0.1em 1em 0.08em  #b3b3ff';
    document.getElementById('savannahMoon').style.transition = '0.4s';
}

function hideVisitSavannahLabel() {
    document.getElementById('visitLabel').style.opacity = '0';
    document.getElementById('savannahMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em #b3b3ff, -0.1em -0.1em 0.75em 0.05em  #b3b3ff';
}

function visitLevelLabel() {
    document.getElementById('visitLabel').style.opacity = '1';
    document.getElementById('levelMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em white, -0.1em -0.1em 1em 0.08em white';
    document.getElementById('levelMoon').style.transition = '0.4s';
}

function hideVisitLevelLabel() {
    document.getElementById('visitLabel').style.opacity = '0';
    document.getElementById('levelMoon').style.boxShadow = 'inset -0.75em -0.75em 1.5em .4em black, inset 0.3em 0.3em 1em 0.002em white, -0.1em -0.1em 0.75em 0.05em white';
}