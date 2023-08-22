//模块化引入
import styles from './index.module.scss';
function Comp() {
	return (
		<div className={styles.box}>
			<p>这是Comp1里面的内容</p>
		</div>
	);
}

export default Comp;
