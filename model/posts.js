module.exports = {

    posts: [
        {
            id: "ofjsdiaul",
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){

        this.posts.push({id:generateId(), title,description});
    },

    deletePost(index){
        this.posts.splice(index,1)
    }



}

function generateId(){
    return Math.random().toString(36).substring(2, 9)
}