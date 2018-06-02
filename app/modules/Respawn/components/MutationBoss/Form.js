import React from 'react';
import { get, size, transform, isNil } from 'lodash';
import styled from 'styled-components';
import Card from 'app/common/Card';
import Input from 'app/common/Input';
import TextArea from 'app/common/Input/Textarea';

const FormWrap = styled.form`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  .full-width {
    grid-column: 1/-1;
  }
  .description,
  .guards {
    grid-column: span 2 / -1;
  }
  .description {
    grid-row: 2 / span 3;
  }
  .guards {
    grid-row: 5 / span 2;
  }
  .button {
    grid-column: span 1 / -1;
  }
`;

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.initData = this.initData.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
  }

  componentDidMount() {
    const { bossInfo } = this.props;
    this.initData(bossInfo);
  }

  componentWillReceiveProps(nextProps) {
    this.initData(nextProps.bossInfo);
  }

  initData(bossInfo) {
    this.setState({ ...bossInfo });
  }

  handleChangeValue(e) {
    get(e, 'target') && this.setState({ [e.target.name]: e.target.value });
  }

  handleSave(e) {
    const { addBoss } = this.props;
    const prepareVariables = transform(this.state, (result, value, key) => {
      !key.startsWith('_') && !isNil(value) && (result[key] = value);
      return result;
    }, {});
    e.preventDefault();
    addBoss({
      variables: {
        raidBoss: {
          _id: this.state._id,
          ...prepareVariables,
        },
      },
    });
  }

  render() {
    const { bossInfo } = this.props;
    const {
      name,
      gameId,
      race,
      description,
      guards,
      lvl,
      HP,
      MP,
      XP,
      SP,
      agr,
      type,
      range,
      pAtk,
      mAtk,
      pDef,
      mDef,
      tAtk,
      media,
    } = this.state;
    const isUpdate = !!size(bossInfo);
    return (<Card>
      <FormWrap onSubmit={this.handleSave}>
        <Input className="full-width" label="Name" name="name" value={name} onChange={this.handleChangeValue} />
        <Input name="gameId" label="Game id" type="number" value={gameId} onChange={this.handleChangeValue} />
        <Input name="lvl" label="level" value={lvl} onChange={this.handleChangeValue} />
        <Input name="HP" label="HP" value={HP} onChange={this.handleChangeValue} />
        <Input name="MP" label="MP" value={MP} onChange={this.handleChangeValue} />
        <Input name="SP" label="SP" value={SP} onChange={this.handleChangeValue} />
        <Input name="XP" label="XP" value={XP} onChange={this.handleChangeValue} />
        <Input name="agr" label="Aggressiveness" value={agr} onChange={this.handleChangeValue} />
        <Input name="type" label="Type" value={type} onChange={this.handleChangeValue} />
        <Input name="range" label="Range of attack" value={range} onChange={this.handleChangeValue} />
        <Input name="race" label="Race" value={race} onChange={this.handleChangeValue} />
        <Input name="pAtk" label="Phisical atack" value={pAtk} onChange={this.handleChangeValue} />
        <Input name="mAtk" label="Magical atack" value={mAtk} onChange={this.handleChangeValue} />
        <Input name="pDef" label="Phisical defence" value={pDef} onChange={this.handleChangeValue} />
        <Input name="mDef" label="Magical defence" value={mDef} onChange={this.handleChangeValue} />
        <Input name="tAtk" label="Type atack" value={tAtk} onChange={this.handleChangeValue} />
        <Input name="media" label="Image" value={media} onChange={this.handleChangeValue} />
        <TextArea className="description" name="description" label="Description" value={description} onChange={this.handleChangeValue} />
        <TextArea className="guards" name="guards" label="Guards" value={guards} onChange={this.handleChangeValue} />
        <button className="button" type="submit">{ isUpdate ? 'Update Boss' : 'Add Boss'}</button>
      </FormWrap>
    </Card>);
  }
}

export default Form;
