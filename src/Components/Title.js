import styles from '../Styles/Title.module.scss'

function Title({name,username,email}) {
    return (
        <div>
            <ul className={styles.title}>
                <li className="list__name">Name: {name}</li>
                <li className="list__userName">Username: {username}</li>
                <li className="list__email">Email: {email}</li>
            </ul>
        </div>
    )
}

export default Title;