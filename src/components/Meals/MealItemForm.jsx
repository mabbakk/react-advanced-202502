import Input from '../UI/Input';
import styles from './MealItemForm.module.scss';
import log from "eslint-plugin-react/lib/util/log.js";

const MealItemForm = (props) => {
    return (
        <form className={styles.form}>
            {/*<Input*/}
            {/*    label={'이름'}*/}
            {/*    inputAttr={{*/}
            {/*        type: 'text',*/}
            {/*        value: '홍길동',*/}
            {/*        onfocus: () => console.log('focus!'),*/}
            {/*        onChange: e => console.log(e.target.value)*/}
            {/*    }}*/}
            {/*/>*/}

            <Input
                label='구매여부'
                inputAttr={{
                  id: 'amount_' + props.id,
                  type: 'number',
                  min: '1',
                  max: '5',
                  step: '1',
                  defaultValue: '1',
                }}
            />
            <button>담기</button>
        </form>
    );
};

export default MealItemForm;