/*
    Ndex : {
            running : boolean,
            value : number
        }

    Walker : {
        .state : {
            index: Ndex ,
            jndex: Ndex
        }

        .info : {
            size : number
        }

        .constructor <- initialState, sizeInfo

        .mutator <- [ 
            update 
            flip <- ndex = i | j
        ]
        .accessor <- [ get : {
            .state.index,
            .state.jndex
        } ]

        .checker <- [ hasReachedFinal ]

        
    }

    Analogy : playing with two indices is like tapping with two hands, you can make them do the same thing but it is really hard to make them do different things. And this is what we are trying to make them do here.
*/