(() => {

    function getMovieDetailsById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getInfoUserById( id: string ) {
        console.log({ id });
    }
    
    interface Movie {
        title      : string; 
        description: string; 
        rating     : number; 
        cast       : string[];
    }

    function createMovie({ title, description, rating, cast } : Movie ) {
        console.log( title, description, rating, cast );
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
       if ( isDead ) return 1500;
       if ( isSeparated ) return 2500;
    
       return isRetired ? 3000 : 4000;
    }

})();




