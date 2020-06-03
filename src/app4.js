import "./app4.css"
import $ from "jquery"

const $color = $('#app4 .color')

$color.on('mouseenter',()=>{
    $color.addClass('active').on('mouseleave',()=>{
        $color.removeClass('active')
    })
})