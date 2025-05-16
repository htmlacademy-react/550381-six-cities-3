type BadgeProps = {
  text: string;
  className: string;
}

function Badge({text, className}: BadgeProps): JSX.Element {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
}

export default Badge;
