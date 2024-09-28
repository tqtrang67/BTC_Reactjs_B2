import React, { useState } from "react";
import styles from "./Glasses.module.css";
import { glassesArr } from "./data";
export default function Glasses() {
	let renderGlasses = () => {
		return glassesArr.map((glasses) => {
			return (
				<div
					className={styles.list}
					onClick={() => handleGlasses(glasses)}
				>
					<img className={styles.image} src={glasses.url} alt="" />
					<h6>{glasses.name}</h6>
				</div>
			);
		});
	};
	const [selectedGlasses, setSelectedGlasses] = useState(null);
	const handleGlasses = (glasses) => {
		setSelectedGlasses(glasses);
	};
	return (
		<div className="container text-center">
			<h2 className={styles.title}>Try Glass app online</h2>
			<div className="row">
				<div className="col-6">
					<img src="./glassesImage/model.jpg" alt="" />
				</div>
				<div className="col-6">
					<img src="./glassesImage/model.jpg" alt="" />
					{selectedGlasses && (
						<img
							src={selectedGlasses.url}
							alt={selectedGlasses.name}
							className={styles.glass}
						/>
					)}

					{selectedGlasses && (
						<div className={styles.des}>
							<h3>{selectedGlasses.name}</h3>
							<p>{selectedGlasses.desc}</p>
							<p>Price: ${selectedGlasses.price}</p>
						</div>
					)}
				</div>
			</div>
			<div className="row mt-5">{renderGlasses()}</div>
		</div>
	);
}
