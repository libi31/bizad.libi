function Status(props) {

    function getBadgeCSS() {
        switch (props.type) {
            case 'available':
                return 'bg-success';
            case 'unavailable':
                return 'bg-warning';
            default:
                return 'bg-secondary';
        }
    }

    return (
        <span className={`badge ${getBadgeCSS()}`}>
            {props.type}
        </span>
    );
}

export default Status;