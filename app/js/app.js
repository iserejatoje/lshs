import IMask from 'imask'
import * as $ from 'jquery'

const phoneMask = document.querySelectorAll('[type="tel"]')
phoneMask.forEach(element => IMask(element, {
    mask: '+{7} (000) 000-00-00'
}))

$(function () {
    $('.accordion-toggle').click(function () {
        let $this = $(this)
        $this.parent().toggleClass('opened')
        $this.next().slideToggle(180)
    })
})