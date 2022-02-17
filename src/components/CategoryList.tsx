import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Category } from '../type/category';

export type CategoryListProps = {
  categoryList: Category[]
}

export default function CategoryList(props: CategoryListProps) {
  const { categoryList } = props;
  return (
    <div className={styles.grid}>
      {categoryList.map((category) => (
        <div className={styles.card} key={category.id}>
          <Link href={`/tip/${category.id}`} >
            <a>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}