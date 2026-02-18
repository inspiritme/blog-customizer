import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	defaultArticleState,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	ArticleStateType,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	states: {
		formState: ArticleStateType;
		setFormState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
		pageState?: ArticleStateType;
		setPageState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
	};
};
export const ArticleParamsForm = ({ states }: ArticleParamsFormProps) => {
	const { formState, setFormState, setPageState } = states;
	const [isOpen, setOpen] = useState(false);

	const handleChange =
		(field: keyof ArticleStateType) => (option: OptionType) => {
			setFormState((prev) => ({
				...prev,
				[field]: option,
			}));
		};
	const handleApply = () => {
		setPageState(formState);
	};
	const handleReset = () => {
		setFormState(defaultArticleState);
		setPageState(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setOpen((prev) => !prev)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					className={styles.form}
					onReset={(e) => {
						e.preventDefault();
						handleReset();
					}}
					onSubmit={(e) => {
						e.preventDefault();
						handleApply();
					}}>
					<Select
						title='шрифт'
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={handleChange('fontFamilyOption')}
					/>
					<RadioGroup
						name='fontsize'
						title='размер шрифта'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={handleChange('fontSizeOption')}
					/>
					<Select
						title='цвет шрифта'
						options={fontColors}
						selected={formState.fontColor}
						onChange={handleChange('fontColor')}
					/>
					<Separator />
					<Select
						title='цвет фона'
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={handleChange('backgroundColor')}
					/>
					<Select
						title='ширина контента'
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={handleChange('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
