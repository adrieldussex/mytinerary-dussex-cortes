import '../styles/Activities.css'

export default function Activities() {
    const activities = [
        {
            name: "Activity1",
            photo: "https://es.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/joggeuse-sur-les-quais-de-seine-%7C-630x405-%7C-%C2%A9-studio-ttg/19800106-1-fre-FR/Joggeuse-sur-les-quais-de-Seine-%7C-630x405-%7C-%C2%A9-Studio-TTG.jpg"
        },
        {
            name: "Activity2",
            photo: "https://es.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/joggeuse-sur-les-quais-de-seine-%7C-630x405-%7C-%C2%A9-studio-ttg/19800106-1-fre-FR/Joggeuse-sur-les-quais-de-Seine-%7C-630x405-%7C-%C2%A9-Studio-TTG.jpg"
        },
        {
            name: "Activity3",
            photo: "https://es.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/joggeuse-sur-les-quais-de-seine-%7C-630x405-%7C-%C2%A9-studio-ttg/19800106-1-fre-FR/Joggeuse-sur-les-quais-de-Seine-%7C-630x405-%7C-%C2%A9-Studio-TTG.jpg"
        }
    ]

    const view = (activity) => {
        return (
            <div className='Activity-card' key={activity.name} style={{backgroundImage:`url(${activity.photo})`, backgroundSize:"cover"}}>
                <p>{activity.name}</p>
            </div>
        )
    }

    return (
        <div className='Activities-container' key={activities.name}>
            {activities.map(view)}
        </div>
    )
}
