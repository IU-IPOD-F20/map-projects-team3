sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.9 python3.9-venv
python3.9 --version
python3.9 -m venv venv
source ./venv/bin/activate
pip3.9 install -U pip
pip3.9 install -U setuptools wheel
pip3.9 install -r requirements.txt
