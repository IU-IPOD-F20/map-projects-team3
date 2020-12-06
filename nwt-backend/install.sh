sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.9 python3.9-venv
python3.9 --version
python3.9 -m venv venv
source ./venv/bin/activate
pip install -U pip
pip install -U setuptools wheel
pip install -r requirements.txt
