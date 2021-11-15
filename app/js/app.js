import IMask from 'imask'
import * as $ from 'jquery'

const phoneMask = document.querySelectorAll('[type="tel"]')
phoneMask.forEach(element => IMask(element, {
    mask: '+{7} (000) 000-00-00'
}))

$(function () {
    $('.burger').click(function () {
        $('body').addClass('menu-opened')
    })
    $('.popup-menu .baloon-link a').click(function () {
        $(this).next().toggle()
    })
    $('.close-menu').click(function () {
        $('body').removeClass('menu-opened')
    })
    $('.accordion-toggle').click(function () {
        let $this = $(this)
        $this.parent().toggleClass('opened')
        $this.next().slideToggle(180)
    })
})