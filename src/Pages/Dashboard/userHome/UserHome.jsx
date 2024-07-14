


const UserHome = () => {
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, WELCOME</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    )
}

export default UserHome