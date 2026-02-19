import '../../styles/index.scss';
import styles from './App.module.scss';
import { CSSProperties, useState } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

export const App = () => {
	const [formState, setFormState] = useState(defaultArticleState);
	const [pageState, setPageState] = useState(defaultArticleState);
	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				states={{
					formState: formState,
					setFormState: setFormState,
					setPageState: setPageState,
				}}
			/>
			<Article />
		</main>
	);
};
