import styles from '../styles/Tip.module.css'
import Link from 'next/link'
import { Tip } from '../type/tip';

export type TipListProps = {
  tipList: Tip[]
}

export default function TipList(props: TipListProps) {
  const { tipList } = props;
  return (
    <div>
      <div className={styles.tip}>
        {tipList.map((tip) => (
          <div className={styles.card} key={tip.id}>
            <Link href={tip.title} >
              <a>
                <h2>{tip.title}</h2>
                <p>{tip.code}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h1>Code examples</h1>
        <p>...</p>
      </div>
    </div>
  )
}