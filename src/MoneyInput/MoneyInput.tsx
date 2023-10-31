import MoneyInputComponent from './MoneyInputComponent'

export default function MoneyInput() {
  return (
    <div className="money-input-wrapper">
      <div className="row">
        <div className="column">
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label">State: Default</span>
              <MoneyInputComponent locale={undefined} disabled={false} />
            </div>
          </div>
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label">State: Hover</span>
              <span className="hover-box">
                <MoneyInputComponent locale={undefined} disabled={false} />
              </span>
            </div>
          </div>
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label">State: Focus</span>
              <span className="focus-box">
                <MoneyInputComponent locale={undefined} disabled={false} />
              </span>
            </div>
          </div>
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label">State: Error</span>
              <span className="on-error">
                <MoneyInputComponent locale={undefined} disabled={false} />
              </span>
            </div>
          </div>
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label">State: Error + Hover </span>
              <span className="error-hover">
                <MoneyInputComponent locale={undefined} disabled={false} />
              </span>
            </div>
          </div>
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label"> State: Error + Focus </span>
              <span className="error-focus">
                <MoneyInputComponent locale={undefined} disabled={false} />
              </span>
            </div>
          </div>
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label">State: Disabled</span>
              <MoneyInputComponent locale={undefined} disabled={true} />
            </div>
          </div>
          <div className="money-input-box">
            <div className="input-with-text">
              <span className="text-label">State: Disabled + Focus </span>
              <span className="focus-box">
                <MoneyInputComponent locale={undefined} disabled={true} />
              </span>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="money-input-box label-container">
            <div className="input-with-text ">
              <span className="text-label">Label</span>
              <MoneyInputComponent locale={undefined} disabled={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
