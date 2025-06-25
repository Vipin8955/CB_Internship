let container=$('.container');
let heading_area=$('.heading_area');
let add_btn=$('#add_btn');
let input_area=$('#input_area');
let display_area=$('#display_area');
let delete_btn=$('.delete_btn');
let task=$('.task');
let task_display=$('.task_display');

add_btn.click(function(){
    if(input_area.val()=='')
    {
        input_area.fadeToggle();
        return;
    }
       
    else
    {
        let new_div=task.clone();
        new_div.find('.task_display').text(input_area.val());
        localStorage.setItem('task',new_div.val());
        display_area.append(new_div);
        new_div.removeClass('hidden');
        input_area.val('');
        let count = $('.task_display').length;
        new_div.css('background-color', count % 2 === 0 ? 'rgb(127, 242, 242)' : 'rgb(223, 153, 23)');
    }
});

$(document).on('click', '.delete_btn', function() {
    $(this).parent().fadeOut(()=>{
        $(this).remove();
    });
});


$(document).on('click', '.task_display', function() {
    $(this).toggleClass('styling');
});
