/**
 * Swizzled from @docusaurus/theme-classic's DocCard.
 * Category cards now list their sub-items instead of showing "N items".
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from '@docusaurus/theme-common/internal';
import {ThemeClassNames} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Layout from '@theme/DocCard/Layout';
import Heading from '@theme/DocCard/Heading';
import Description from '@theme/DocCard/Description';
import styles from './styles.module.css';

function getFallbackEmojiIcon(item) {
  if (item.type === 'category') {
    return '🗃';
  }
  return isInternalUrl(item.href) ? '📄️' : '🔗';
}

function getIconTitleProps(item) {
  const extracted = extractLeadingEmoji(item.label);
  const emoji = extracted.emoji ?? getFallbackEmojiIcon(item);
  return {
    icon: emoji,
    title: extracted.rest.trim(),
  };
}

function subItemHref(subItem) {
  return subItem.type === 'link' ? subItem.href : findFirstSidebarItemLink(subItem);
}

function CardCategory({item}) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  const subItems = item.items ?? [];
  return (
    <div
      className={clsx(
        'card padding--lg',
        ThemeClassNames.docs.docCard.container,
        styles.cardContainer,
        item.className,
      )}>
      <Link href={href} className={styles.cardHeadingLink}>
        <Heading item={item} {...getIconTitleProps(item)} />
      </Link>
      {item.description && <Description item={item} description={item.description} />}
      {subItems.length > 0 ? (
        <ul className={styles.cardSubItemList}>
          {subItems.map((subItem, index) => {
            const itemHref = subItemHref(subItem);
            return (
              <li key={index} className={styles.cardSubItem}>
                {itemHref ? (
                  <Link href={itemHref} className={styles.cardSubItemLink}>
                    {subItem.label}
                  </Link>
                ) : (
                  subItem.label
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={clsx('text--truncate', styles.cardFallbackDescription)}>
          {categoryItemsPlural(0)}
        </p>
      )}
    </div>
  );
}

function CardLink({item}) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      description={item.description ?? doc?.description}
      {...getIconTitleProps(item)}
    />
  );
}

export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
