import './Host.scss';

export default function Host(props) {
    // Sépare le nom complet en un tableau de mots
    const names = props.hostName.split(' ');
    // Extrait le prénom (premier élément du tableau)
    const firstName = names.shift();
    // Rejoint les éléments restants du tableau pour former le nom de famille/reste du nom
    const lastName = names.join(' ');
	return (
		<div className="host-comp">
			<div className="host-name">{firstName}<br/>{lastName}</div>
			<div className="hostPicture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</div>
	);
}