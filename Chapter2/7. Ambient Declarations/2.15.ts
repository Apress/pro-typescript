declare class jQuery {
    html(html: string): void;
}

declare function $(query: string): jQuery;

$('#id').html('Hello World');
 