export default {
    props: ['currentuser'],
    template: `
        <div class="container">
            <pre style="color: white">{{ currentuser }}</pre>
            <h1>HOLA, {{ currentuser.fname }}</h1>
        </div>
    `,

}