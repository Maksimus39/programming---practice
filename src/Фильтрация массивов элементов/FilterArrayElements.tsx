import {useState} from "react";


type PeopleManType = {
    id: number
    name: string
    profession: string
}

export const FilterArrayElements = () => {
    const peopleMan: PeopleManType[] = [
        {id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician'},
        {id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist'},
        {id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist'},
        {id: 3, name: 'Percy Lavon Julian', profession: 'chemist'},
        {id: 4, name: 'Subrahmanyan Chandrasekhar', profession: 'astrophysicist'}
    ];

    let [man, setMan] = useState<PeopleManType[]>(peopleMan)

    // mathematicianHandler
    function mathematicianHandler() {
        setMan(peopleMan.filter(el => el.profession === 'mathematician'))
    }

    // chemistHandler
    function chemistHandler() {
        setMan(peopleMan.filter(el => el.profession === 'chemist'))
    }

    //physicistHandler
    function physicistHandler() {
        setMan(peopleMan.filter(el => el.profession === 'physicist'))
    }

    // astrophysicistHandler
    function astrophysicistHandler() {
        setMan(peopleMan.filter(el => el.profession === 'astrophysicist'))
    }


    return (
        <div>
            <button onClick={mathematicianHandler}>mathematician</button>
            <button onClick={chemistHandler}>chemist</button>
            <button onClick={physicistHandler}>physicist</button>
            <button onClick={astrophysicistHandler}>astrophysicist</button>

            <ul>
                {man.map(el=>{
                    return(
                        <ol key={el.id}>
                            {el.name} - {el.profession}
                        </ol>
                    )
                })}
            </ul>
        </div>
    )
};
