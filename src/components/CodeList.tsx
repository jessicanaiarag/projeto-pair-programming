import styles from '../styles/Tip.module.css'
import { Code } from '../type/code'

export type CodeListProps = {
  CodeList: Code[]
}

export default function CodeList(props: CodeListProps) {
  const { CodeList } = props;
  return (
    <div>
      <div>
        {CodeList.map((code) => (
          <div className={styles.tip} key={code.id}>
            <h2>{code.description}</h2>
            <p>
              {code.codeExample}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}