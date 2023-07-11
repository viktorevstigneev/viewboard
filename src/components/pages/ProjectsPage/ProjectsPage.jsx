import './style.css';
import React from 'react';

const MainPage = () => {
	return (
		<>
			<main className="task">
				<div className="task__container">
					<h2 className="task__title">Введите задачу</h2>
					<input className="task__input" type="text" />

					<div className="task__line"></div>
					<div className="task__line"></div>

					<div className="taks__content">
						<div className="task__card">
							<div className="task__avatar"></div>
							<p className="task__name">name</p>
						</div>
					
					</div>
				</div>
			</main>
		</>
	);
};

export default MainPage;
